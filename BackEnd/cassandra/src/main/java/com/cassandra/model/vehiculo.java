
package com.cassandra.model;
import org.springframework.data.cassandra.core.mapping.PrimaryKey;
import org.springframework.data.cassandra.core.mapping.Table;

@Table
public class vehiculo {
    @PrimaryKey
    private int id;
    private String marca;
    private String modelo;
    private String colorP;
    private String colorS;
    private String anioFabri;

    public vehiculo() {
    }

    public vehiculo(int id, String marca, String modelo, String colorP, String colorS, String anioFabri) {
        this.id = id;
        this.marca = marca;
        this.modelo = modelo;
        this.colorP = colorP;
        this.colorS = colorS;
        this.anioFabri = anioFabri;
    }
    
    
    
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getMarca() {
        return marca;
    }

    public void setMarca(String marca) {
        this.marca = marca;
    }

    public String getModelo() {
        return modelo;
    }

    public void setModelo(String modelo) {
        this.modelo = modelo;
    }

    public String getColorP() {
        return colorP;
    }

    public void setColorP(String colorP) {
        this.colorP = colorP;
    }

    public String getColorS() {
        return colorS;
    }

    public void setColorS(String colorS) {
        this.colorS = colorS;
    }

    public String getAnioFabri() {
        return anioFabri;
    }

    public void setAnioFabri(String anioFabri) {
        this.anioFabri = anioFabri;
    }
    
    
}
