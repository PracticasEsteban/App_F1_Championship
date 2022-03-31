package f1.esteban.api.interfas;

import f1.esteban.api.model.Piloto;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface PilotoRepository extends MongoRepository<Piloto, String> {



}
