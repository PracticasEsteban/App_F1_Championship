package f1.esteban.api.controller;

import f1.esteban.api.model.Piloto;
import f1.esteban.api.service.PilotoService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("api/pilotos")
@AllArgsConstructor
public class PilotoController {

    private  final PilotoService pilotoService;

    @GetMapping
    public List<Piloto> fetchAllPilotos(){
        return pilotoService.getAllPilots();
    }

}
