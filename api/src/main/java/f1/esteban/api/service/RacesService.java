package f1.esteban.api.service;


import f1.esteban.api.model.Piloto;
import f1.esteban.api.model.Race;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class RacesService {

    @Autowired
    PilotoService pilotoService;

    public List<String> getRaces() {

        List<Piloto> lista = this.pilotoService.getAllPilots();
        Piloto piloto = lista.get(0);
        List<Race> races = piloto.getRaces();
        List<String> racesName= new ArrayList<>();

        for (int i = 0; i < races.size(); i++) {
            racesName.add(races.get(i).getName());
        }

        racesName.add(0, "Global");
        return racesName;
    }
}
