<template>
    <div class="container-fuid">
        <div class="row titulo">
            <div class="col">
                <header class="float-left">
                    <img src="@/assets/fotoCliente.png" id="logo" width="36" alt=""> 
                    <span id="nombre">Nombre Cliente</span>
                </header>
            </div>
             
             <div class="row">
                <div class="col float-righ btn-header">
                    <button class="btn editar">Editar</button>
                    <button class="btn eliminar">X</button>
                </div>
             </div>
        </div>

        <hr id="rectangle3">
        
        <nav class="navbar">
            <ul class="nav nav-pills">
                <li class="nav-item">
                    <a class="nav-link" href="#">Clientes Generales</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" id="active" href="#">Clientes Domicilio</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Cliente Contacto</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Cliente Equipo</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Cliente Polizas</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Tikets y Documentos</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Produccion</a>
                </li>
                <li class="nav-item">
                     <a class="nav-link" href="#">Anexos</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Visitas</a>
                </li>
            </ul>
            <div id="tab-active"></div>
        </nav>

        <hr id="line2">
        
        
        <div class="form-group">
            <h2 id="subtitulo" class="mt-5">Consulta Cliente Domicilio</h2>

            <hr id="line4">

             <form>
                <div id="search">
                    <span>Buscar: </span>
                    <div id="search-icon">
                        <input type="text" id="" v-model.trim="busqueda" placeholder="Escribe lo que deseas buscar">
                    </div>
                </div>
                <button class="btn float-right" id="btn-nuevoDomicilio"><span>+ Nuevo Domicilio</span></button> 
            </form>
        </div>

        <div class="table-responsive-sm">
            <table class="table table-striped" id="tabla-resultados">
                <thead>
                    <tr>
                        <th>... <img src="@/assets/arrow.png" alt=""></th>
                        <th @click="sort('numero')">Persona No. <img src="@/assets/arrow.png" alt=""> </th>
                        <th @click="sort('tipo')">Tipo Domicilio <img src="@/assets/arrow.png" alt=""> </th>
                        <th @click="sort('calle')">Calle <img src="@/assets/arrow.png" alt=""> </th>
                        <th @click="sort('numero')">Numero <img src="@/assets/arrow.png" alt=""> </th>
                        <th @click="sort('calle')">Sector <img src="@/assets/arrow.png" alt=""> </th>
                        <th @click="sort('provincia')">Provincia <img src="@/assets/arrow.png" alt=""> </th>
                        <th @click="sort('estado')">Estado <img src="@/assets/arrow.png" alt=""> </th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(datos,index) of DatosOrdenados" :key="index">
                        <td>
                            <button type="button" @click="MostrarModalUbicacion(index)" class="btn-ubication" data-toggle="modal" data-target="#exampleModal">
                                <img src="@/assets/location.png" class="img-ubication" alt="ubication">
                            </button>
                        </td>
                        <td>{{ datos.numero }}</td>
                        <td>{{ datos.tipo }}</td>
                        <td>{{ datos.calle }}</td>
                        <td>{{ datos.numero }}</td>
                        <td>{{ datos.calle }}</td>
                        <td>{{ datos.provincia }}</td>
                        <td>Activo</td>
                    </tr>
                    
                </tbody>
            </table>
        </div>

        <div class="paginacion">
            <nav aria-label="Page navigation example">
                <ul class="pagination float-right">
                    <span>1 - 10 de {{ Data.length }}</span> 
                    <li class="page-item" >
                        <button class="page-link" @click="Previo">
                            <img src="@/assets/anterior.png" alt="">
                        </button>
                    </li>
                     <li class="page-item">
                         <button class="page-link" @click="Siguiente">
                             <img src="@/assets/siguiente.png" alt="">
                         </button>

                    </li>
                </ul>
            </nav>
        </div>

            <!-- Modal -->
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Ubicacion | {{ tipoDomicilio }}</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <p id="description-modal">
                                 {{ descripcionUbicacion }}
                            </p>
                            <div id="rectangle"></div>
                            
                            <div id="img-modal">
                                <img src="@/assets/imgModal.png" alt="">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
export default {
    name: 'Cliente',
    data(){
        return{
            descripcionUbicacion: '',
            tipoDomicilio: '',
            busqueda: '',
            currentSort:'',
            currentSortDir:'asc',
            pageSize: 5,
            currentPage: 1
        }
    },
    methods:{
        ...mapActions(['GetData']),
        MostrarModalUbicacion(id)
        {
             this.descripcionUbicacion = this.Data[id].direccion;
            this.tipoDomicilio = this.Data[id].tipo;
        },
        sort(TipoOrdenamiento)
        {
            this.currentSort = TipoOrdenamiento;
            if(TipoOrdenamiento === this.currentSort)
            {
                this.currentSortDir = this.currentSortDir==='asc'?'desc':'asc';
            }
            this.currentSort = TipoOrdenamiento;

        },
        
        Previo()
        {
            if((this.currentPage * this.pageSize) < this.Data.length) this.currentPage++;
        },

        Siguiente()
        {
            if(this.currentPage > 1) this.currentPage--;
        }
    },
    computed:{
        ...mapState(['Data']),

        DatosOrdenados()
        {
           return this.Data.sort((a,b) => {
            let modifier = 1;
            if(this.currentSortDir === 'desc') modifier = -1;
            if(a[this.currentSort] < b[this.currentSort]) return -1 * modifier;
            if(a[this.currentSort] > b[this.currentSort]) return 1 * modifier;
            return 0;
            })
            .filter((row, index) => {
                let start = (this.currentPage-1)*this.pageSize;
                let end = this.currentPage*this.pageSize;
                if(index >= start && index < end) return true;
            })
            .filter(datos => datos.tipo.toLowerCase().includes(this.busqueda.toLowerCase()) ||
                datos.calle.toLowerCase().includes(this.busqueda.toLowerCase()) ||
                datos.numero == this.busqueda ||
                datos.provincia.toLowerCase().includes(this.busqueda.toLowerCase()));
        }

    },
    created() {
        this.GetData();
    }
}
</script>

<style scoped>
    *{
        overflow: hidden;
    }
    .container-fluid{
        width: 100%;
    }

    .titulo{
        width: 100%;
        height: 84px;
        background-color: #f4f6fa;
    }  

    .editar{
        width: 90px;
        height: 36px;
        border-radius: 7px;
        color: #273f70;
        background-color: #ffffff;
        font-weight: bold;
        font-size: 14px;
        font-weight: 700;
        padding: 0 17px 0 33px;
    }
    .eliminar{
        width: 36px;
        height: 36px;
        border-radius: 6px;
        color: #a30000;
        background-color: #ffffff;
        opacity: 100%;
        margin: 24px 48px 24px 18px;
    }

    #logo{
        margin: 22px 12px 32px 48px;
    }
    #nombre{
        width: 203px;
        height: 30px;
        color: #555555;
        font-size: 28px;
        font-weight: 600;
    }
    #rectangle3{
        width: 100%;
        height: 2px;
        background-color: #dfdfdf;
        opacity: 0.6;
        margin-top: -1px;
        margin-bottom: 2px;
    }

     #subtitulo{
        width: 247px;
        height: 22px;
        opacity: 100%;
        font-size: 20px;
        font-weight: 600;
        letter-spacing: 0px;
        color: #555555;

        margin-left: 48px;
        margin-top: 48px;
        
    }

    .navbar{
        width: 100%;
        margin-bottom: -35px;
        margin-left: 15px;
        
    }

    .nav-link{
        margin-top: -6px;
        color: #273f70;
        font-style: normal;
        letter-spacing: normal;
        line-height: normal;
        text-align: center;
        font-weight: 500;
        font-style: normal;
        padding-right: 2px;
        
    }

    .nav-link a{
        font-size: 15px;
        font-family: "Archivo Medium";
    }
    .nav-item #active{
        color:#3c8bfb;
        opacity: 100%;
        font-size: 15px;
        font-weight: 500;
        letter-spacing: 0px;
    }

    #tab-active{
        width: 122px;
        height: 8px;
        background-color: #3c8bfb;
        margin-left: 167px;
        margin-top: 5px;
        position: relative;
        z-index: 1;
    }
   
   #btn-nuevoDomicilio{
        width: 147px;
        height: 36px;
        box-shadow: 2px 2px 1px rgba(0, 0, 0, 0.05);
        border-radius: 7px;
        background-color: #273f70;
        margin-top: -37px;
        margin-right: 48px;
    }

    #btn-nuevoDomicilio span{
        color: #ffffff;
        font-family: Archivo;
        font-size: 14px;
        font-weight: 700;
        font-style: normal;
        letter-spacing: normal;
        line-height: normal;
        text-align: left;
    }

    #search span{
        width: 56px;
        height: 17px;
        opacity: 100%;
        font-size: 16px;
        font-weight: 500;
        letter-spacing: 0px;
        color: #555555;
        margin-left: 48px;
        margin-right: 12px;
        margin-top: 55px;
    }

    #search-icon{
        background: url('../assets/search.png') no-repeat;
        background-position: 4px center;
        background-size: 10px;
        display: flex;
        align-items: center;
        width: 288px;
        padding-left: 28px;
        border: 1px solid #dfdfdf;
        border-radius: 6px;
        padding-left: 15px;
        margin: -28px 0 1px 120px
    }

    #search input{
        width: 288px;
        height: 36px;
        border: none;
        background-color: #ffffff;
        padding-left: 22px;
        
    }
    

    #tabla-resultados{
        width: 92.3%;
        height: 44px;
        opacity: 100%;
        margin-top: 5px;
        margin-left: 48px;
        margin-right: 48px;
    }

    #tabla-resultados thead {
        background-color: #273f70;
        opacity: 100%;
        width: 40px;
        height: 13px;
        color: #ffffff;
        font-family: "Archivo Medium";
        font-size: 12px;
        font-weight: 600;
        font-style: normal;
        letter-spacing: normal;
        line-height: normal;
        text-align: left;
        text-transform: uppercase;
        cursor: pointer;
    }
   
    #tabla-resultados thead tr th img{
        padding-left: 6px;
     }

    .btn-ubication{
        border: 0px;
        background-color: transparent;
        cursor: pointer;
    }

    .paginacion{
        margin-top: 25px;
        margin-right: 48px;
    }
    
    .paginacion span{
        width: 71px;
        height: 13px;
        color: #9b9b9b;
        font-family: Archivo;
        font-size: 12px;
        font-weight: 400;
        margin-top: 10px;
    }

    .page-link{
        width: 36px;
        height: 36px;
        box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
        border-radius: 4px;
        border: 1px solid #dfdfdf;
        background-color: #ffffff;
        margin-left: 12px;
    }

     #line2{
        width: 100%;
        border: 1px solid #f5f5f8;
        height: 1px;
        background-color: #f5f5f8;
        opacity: 99%;
        margin-bottom: -15px;
        margin-top: 22px;
        
    }
    #line4{
        width: 92%;
        border: 1px solid #f5f5f8;
        height: 1px;
        background-color: #f5f5f8;
        opacity: 100%;
        margin-top: 22px;
        margin-bottom: 26px;
    }

    .modal-body{
        width: 100%;
        height: 450px;
    }

    #description-modal{
        width: 100%;
        height: 60px;
        background-color: #3c8bfb;
        color: #ffffff;
        font-family: Archivo;
        font-size: 14px;
        font-weight: 400;
        font-style: normal;
        letter-spacing: normal;
        line-height: normal;
        text-align: left;
        padding-top: 22px;
        padding-left: 42px;
    }

    #rectangle{
        width: 16px;
        height: 21px;
        transform: rotate(-315deg);
        background-color: #3c8bfb;
        margin-top: -28px;
        margin-left: 44px;
    }

    #img-modal{
        width: 100%;
        height: 327px;
        margin-top: 14px;
    }
    .modal-title{
        width: 322px;
        height: 26px;
        color: #555555;
        font-size: 24px;
        font-weight: 600;
        font-style: normal;
        letter-spacing: normal;
        line-height: normal;
    }
</style>