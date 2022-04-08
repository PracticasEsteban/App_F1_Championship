package f1.esteban.api.controller;

import f1.esteban.api.DTO.PilotoDTO;
import f1.esteban.api.service.DriverService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "*", methods= {RequestMethod.GET,RequestMethod.POST})
@RestController
@RequestMapping("driver")
public class DriverController {

    @Autowired
    DriverService driverService;

    @GetMapping(value = "/{id}")
    public PilotoDTO fetchById(@PathVariable String id){

        return this.driverService.getDriver(id);
    }


}
