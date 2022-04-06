package f1.esteban.api.service;

import f1.esteban.api.jpa.PilotoRepository;
import f1.esteban.api.model.Piloto;
import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;


@Service
public class PilotoService {

    @Autowired
    PilotoRepository pilotoRepository;

    public List<Piloto> getAllPilots() {
        return pilotoRepository.findAll();
    }

    public Optional<Piloto> getPilot( String id) {

        return pilotoRepository.findById(id);
    }
}
