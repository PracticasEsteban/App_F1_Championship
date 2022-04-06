package f1.esteban.api.controller;

import f1.esteban.api.model.Piloto;
import f1.esteban.api.service.PilotoService;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("api/pilotos")
public class PilotoController {

    @Autowired
    PilotoService pilotoService;

    @GetMapping
    public List<Piloto> fetchAllPilotos(){
        return this.pilotoService.getAllPilots();
    }


    @GetMapping(value = "/{id}")
    public Piloto fetchById(@PathVariable String id){
        System.out.println("ID "+id);
        Optional<Piloto> pilot= this.pilotoService.getPilot(id);
        System.out.println("Piloto "+pilot);
        if (pilot.isPresent()){
            return pilot.get();
        }else{
            return null;
        }
    }
}
