/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package classes_package;

/**
 *
 * @author pablouni
 */
public class client {
    private String codigo;
    private String nombre;
    private String pais;
    private String servicio;
    
    //Metodo constructor del objeto, distribuimos la informacion
    public client(String codigo, String nombre, String pais, String servicio){
        this.codigo=codigo;
        this.nombre=nombre;
        this.pais=pais;
        this.servicio=servicio;
    }

    public String getCodigo() {
        return codigo;
    }

    public void setCodigo(String codigo) {
        this.codigo = codigo;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getPais() {
        return pais;
    }

    public void setPais(String pais) {
        this.pais = pais;
    }

    public String getServicio() {
        return servicio;
    }

    public void setTipo_pasta(String servicio) {
        this.servicio = servicio;
    }
    
}
