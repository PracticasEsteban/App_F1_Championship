package f1.esteban.api.model;

import lombok.Data;

@Data
public class Race {
    private String name;
    private String time;

    public Race() {
    }

    public Race(String name, String time) {
        this.name = name;
        this.time = time;
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
}
