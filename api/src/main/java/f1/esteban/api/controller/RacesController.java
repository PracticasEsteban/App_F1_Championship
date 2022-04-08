package f1.esteban.api.controller;


import f1.esteban.api.DTO.PilotoDTO;
import f1.esteban.api.service.RacesService;
import f1.esteban.api.service.RankingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*", methods= {RequestMethod.GET,RequestMethod.POST})
@RestController
@RequestMapping("races")
public class RacesController {


    @Autowired
    RacesService racesService;

    @GetMapping
    public List<String> getRaces(){
        return this.racesService.getRaces();
    }
}
