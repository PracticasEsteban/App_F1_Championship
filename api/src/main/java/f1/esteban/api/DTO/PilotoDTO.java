package f1.esteban.api.DTO;

import com.fasterxml.jackson.annotation.JsonInclude;


import java.util.List;

@JsonInclude(JsonInclude.Include.NON_NULL)
public class PilotoDTO {

    private String id;
    private String picture;
    private Integer age;
    private String name;
    private String team;
    private List<RaceDTO> races= null;
    private Float time;
    private Integer posicion;

    public PilotoDTO() {
    }

    public PilotoDTO(String id, String picture, Integer age, String name, String team, List<RaceDTO> races, Float time, Integer posicion) {
        this.id = id;
        this.picture = picture;
        this.age = age;
        this.name = name;
        this.team = team;
        this.races = races;
        this.time = time;
        this.posicion = posicion;
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

    public Integer getAge() {
        return age;
    }

    public void setAge(Integer age) {
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

    public List<RaceDTO> getRaces() {
        return races;
    }

    public void setRaces(List<RaceDTO> races) {
        this.races = races;
    }

    public Float getTime() {
        return time;
    }

    public void setTime(Float time) {
        this.time = time;
    }

    public Integer getPosicion() {
        return posicion;
    }

    public void setPosicion(Integer posicion) {
        this.posicion = posicion;
    }
}
