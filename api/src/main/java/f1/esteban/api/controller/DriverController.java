package f1.esteban.api.controller;

import f1.esteban.api.DTO.PilotoDTO;
import f1.esteban.api.service.DriverService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


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
