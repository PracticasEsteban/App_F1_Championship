package f1.esteban.api.service;

import f1.esteban.api.DTO.PilotoDTO;
import f1.esteban.api.model.Piloto;
import f1.esteban.api.model.Race;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;

@Service
public class RankingService {

    @Autowired
    PilotoService pilotoService;

    public List<PilotoDTO> getRanking() {

        List<Piloto> listaJPA= this.pilotoService.getAllPilots();
        List<PilotoDTO> listaDTO=this.getData(listaJPA);


        return listaDTO;

    }


    //Mapear ListaJPA A DTO

    private List<PilotoDTO> map(List<PilotoDTO> lista){




        return null;


    }


    //Retornar la lista

    private List<PilotoDTO> getData(List<Piloto> lista){

        List<PilotoDTO> listaDTO= new ArrayList<>();


        for(Piloto piloto :lista) {

            PilotoDTO pilotoDTO=new PilotoDTO();

            int timeUser=0;


            for (Race race :piloto.getRaces()){

                String[] part= race.getTime().split(":");
                int hour=Integer.parseInt(part[0]);
                int minute=Integer.parseInt(part[1]);
                int second=(int) Float.parseFloat(part[2]);

                int temp;
                temp = second + (60 * minute) + (3600 * hour);

                timeUser+=temp;


            }

            pilotoDTO.setPicture(piloto.getPicture());
            pilotoDTO.setName(piloto.getName());
            pilotoDTO.setTeam(piloto.getTeam());
            pilotoDTO.setTime(timeUser);


            listaDTO.add(pilotoDTO);


        }

        //Ordenamos lista
        listaDTO.sort(Comparator.comparingInt(PilotoDTO::getTime));

        //Borramos atributo Lista time

        for(PilotoDTO pilotoDTO :listaDTO){

            pilotoDTO.setTime(null);
        }

        return listaDTO;

    }

}
