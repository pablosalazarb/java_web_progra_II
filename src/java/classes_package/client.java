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
    private String editorial;
    private String tipo_pasta;
    private String publicacion;
    
    public client(String codigo, String nombre, String editorial, String tipo_pasta, String publicacion){
        this.codigo=codigo;
        this.nombre=nombre;
        this.editorial=editorial;
        this.tipo_pasta=tipo_pasta;
        this.publicacion=publicacion;
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

    public String getEditorial() {
        return editorial;
    }

    public void setEditorial(String editorial) {
        this.editorial = editorial;
    }

    public String getTipo_pasta() {
        return tipo_pasta;
    }

    public void setTipo_pasta(String tipo_pasta) {
        this.tipo_pasta = tipo_pasta;
    }

    public String getPublicacion() {
        return publicacion;
    }

    public void setPublicacion(String publicacion) {
        this.publicacion = publicacion;
    }
    
}
