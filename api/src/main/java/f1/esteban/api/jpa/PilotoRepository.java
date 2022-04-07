package f1.esteban.api.jpa;

import f1.esteban.api.model.Piloto;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.Optional;

public interface PilotoRepository extends MongoRepository<Piloto, String> {


    Optional<Piloto> findById(String id);
}
