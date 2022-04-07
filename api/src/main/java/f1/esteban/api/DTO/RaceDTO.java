package f1.esteban.api.DTO;

import com.fasterxml.jackson.annotation.JsonInclude;

@JsonInclude(JsonInclude.Include.NON_NULL)
public class RaceDTO {

    private String name;
    private String time;
    private Integer position;

    public RaceDTO() {
    }

    public RaceDTO(String name, String time, Integer position) {
        this.name = name;
        this.time = time;
        this.position=position;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getTime() {
        return time;
    }

    public void setTime(String time) {
        this.time = time;
    }

    public Integer getPosition() {
        return position;
    }

    public void setPosition(Integer position) {
        this.position = position;
    }
}
