package f1.esteban.api.controller;

import f1.esteban.api.DTO.PilotoDTO;
import f1.esteban.api.model.Piloto;
import f1.esteban.api.service.RankingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*", methods= {RequestMethod.GET,RequestMethod.POST})
@RestController
@RequestMapping("ranking")
public class RankingController {

    @Autowired
    RankingService rankingService;

    @GetMapping
    public List<PilotoDTO> getRanking(){
        return this.rankingService.getRanking();
    }

    @GetMapping("/carrera")
    public List<PilotoDTO> getRankingCarrera(@RequestParam(required = false, defaultValue = "") String carrera){

        System.out.println("Carrera: "+carrera);
        return this.rankingService.getRankingCarrera(carrera);
    }



}
