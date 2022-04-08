

## API SPRING BOOT

#### Puerto : 8080

#### docker-compose.yml

        Docker compose para server MongoDB
        
#### MongoDB
        DatabaseName -> af1bd
        CollectionName -> pilotos
        
        En la collection pilotos se encuentra importado el Json.
        
#### Api REST

        localhost:8080/api/pilotos -> Get del Array Json completo
        
        localhost:8080/api/pilotos/5f3a3c5faa55d5c4ea549ac1 -> Get del Objeto Piloto por ID más su Array de Races
        
        localhost:8080/ranking -> Get del array Piloto: picture, name, team. Ordenado por tiempo ,clasificación Global, primero a ultimo.
        
        localhost:8080/ranking/carrera?carrera=Gp Spain -> Get del array Piloto :  picture, name, team. Ordenado por tiempo de la carrera especifica.
        
        localhost:8080/driver/5f3a3c5f65e328c1a1263781 -> Get del objeto piloto con campos -> "id" ,"picture","age","name", "team", "posicion" , "races"->[{name, time,   position}] 
        
        localhost:8080/races -> Get Array String Races con Global. 
