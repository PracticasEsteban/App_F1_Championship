package f1.esteban.api.service;

import f1.esteban.api.DTO.PilotoDTO;
import f1.esteban.api.DTO.RaceDTO;
import f1.esteban.api.model.Piloto;
import f1.esteban.api.model.Race;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;
import java.util.Optional;

@Service
public class DriverService {

    @Autowired
    PilotoService pilotoService;

    @Autowired
    RankingService rankingService;


    /*Devolvera los datos del piloto (URL foto,
      nombre, edad, escudería y posición en
    el ranking global) y por otro un array con
    los datos de cada carrera (nombre Gran
    Premio, posición y tiempo total de
    carrera).*/

    public PilotoDTO getDriver(String id) {
        //Obetenmos lista Global para luego comparar
        List<Piloto> lista = this.pilotoService.getAllPilots();

        //Obtenemos el piloto
        Optional<Piloto> optionalPiloto = this.pilotoService.getPilot(id);
        Piloto piloto = new Piloto();

        //Vamos a retronar este objeto PilotoDTO
        PilotoDTO pilotoDTO = new PilotoDTO();

        if (optionalPiloto.isEmpty()) {
            return null;
        } else {
            piloto = optionalPiloto.get();

            //Vamos añadiendo las variables necesarias (Mapeamos jpa A DTO);
            pilotoDTO.setId(piloto.getId());
            pilotoDTO.setPicture(piloto.getPicture());
            pilotoDTO.setName(piloto.getName());
            pilotoDTO.setAge(piloto.getAge());
            pilotoDTO.setTeam(piloto.getTeam());



            //Obtenemos ranking Global

            List<PilotoDTO> listaGlobal = this.rankingService.getRanking();

            Integer posicion = 0;

            //Obtenemos index del objeto piloto POR ID
            for (int i = 0; i < listaGlobal.size(); i++) {

                if (listaGlobal.get(i).getId().equals(id)) {
                    posicion = i + 1;
                }
            }

            //Añadimos posicion ranking global
            pilotoDTO.setPosicion(posicion);

            //Toca añadir Array carreras con posicion
            List<RaceDTO> listRacesDTO = new ArrayList<>();

            for (Race race : piloto.getRaces()) {

                RaceDTO raceDTO = new RaceDTO();
                raceDTO.setName(race.getName());
                raceDTO.setTime(race.getTime());

                Integer posicionRace = 0;

                //Llamamos a la funcion que retorna la posicion carrera Enviamos DatosGlobales
                posicionRace = this.getPositionRaceDriver(id, race.getName(), lista);

                raceDTO.setPosition(posicionRace);

                listRacesDTO.add(raceDTO);
            }

            //Añadimos la lista DTO al piloto DTO

            pilotoDTO.setRaces(listRacesDTO);

        }

        return pilotoDTO;
    }


    private Integer getPositionRaceDriver(String id, String carrera, List<Piloto> lista) {
        //Lista DTO para obtener index piloto
        List<PilotoDTO> listaDTO = new ArrayList<>();

        for (Piloto piloto : lista) {

            PilotoDTO pilotoDTO = new PilotoDTO();

            for (Race race : piloto.getRaces()) {

                if (race.getName().equalsIgnoreCase(carrera)) {

                    String[] part = race.getTime().split(":");
                    int hour = Integer.parseInt(part[0]);
                    int minute = Integer.parseInt(part[1]);
                    float second =  Float.parseFloat(part[2]);

                    float temp;
                    temp = second + (60 * minute) + (3600 * hour);

                    pilotoDTO.setId(piloto.getId());
                    pilotoDTO.setTime(temp);

                    listaDTO.add(pilotoDTO);
                }

            }
        }

        //Ordenamos lista
        listaDTO.sort(Comparator.comparing(PilotoDTO::getTime));

        Integer position = 0;

        for (int i = 0; i < listaDTO.size(); i++) {

            if (listaDTO.get(i).getId().equals(id)) {
                position = i + 1;
            }
        }
        return position;
    }


}
