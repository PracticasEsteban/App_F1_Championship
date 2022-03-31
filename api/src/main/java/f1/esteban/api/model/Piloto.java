package f1.esteban.api.model;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.ArrayList;
import java.util.List;

@Data
@Document(collection = "pilotos")
public class Piloto {

    @Id
    private String id;
    private String picture;
    private int age;
    private String name;
    private String team;
    private List<Race> races= new ArrayList<>();


    public Piloto() {
    }

    public Piloto(String id, String picture, int age, String name, String team, List<Race> races) {
        this.id = id;
        this.picture = picture;
        this.age = age;
        this.name = name;
        this.team = team;
        this.races = races;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getPicture() {
        return picture;
    }

    public void setPicture(String picture) {
        this.picture = picture;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getTeam() {
        return team;
    }

    public void setTeam(String team) {
        this.team = team;
    }

    public List<Race> getRaces() {
        return races;
    }

    public void setRaces(List<Race> races) {
        this.races = races;
    }
}
