package f1.esteban.api.service;

import f1.esteban.api.interfas.PilotoRepository;
import f1.esteban.api.model.Piloto;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@AllArgsConstructor
@Service
public class PilotoService {

    private final PilotoRepository pilotoRepository;

    public List<Piloto> getAllPilots() {
        return pilotoRepository.findAll();
    }
}
