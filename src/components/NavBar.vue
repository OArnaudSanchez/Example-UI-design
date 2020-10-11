<template>
    <div>
        <div id="content-wrapper" class="d-flex">
            <div id="pageContainer" class="w-100 bg-light-blue">
                <nav class="navbar navbar-expand-lg navbar-light bg-white">

                        <div id="bread-crumbs">
                            <span class="badge badge-pill badge-light">
                                <span class="badgeClass">Cartera > </span> 
                                <span class="badgeClass">Clientes > </span> 
                                <strong class="badgeClass">Nombre Cliente</strong>
                            </span>
                        </div>
                        
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                            
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav ml-auto">
                                <li class="nav-item active">
                                    <a class="nav-link" href="#">
                                        <img src="@/assets/statsLogo.png" class="img" alt="">
                                    </a>
                                </li>

                                <hr id="line-copy">

                                <li class="nav-item">
                                    <a class="nav-link" href="#">
                                        <img src="@/assets/newspaperLogo.png" class="img" alt="">
                                    </a>
                                </li>
                                <hr id="line-copy">

                                <li class="nav-item">
                                    <a class="nav-link" href="#">
                                        <img src="@/assets/searchLogo.png" class="img" alt="">
                                    </a>
                                </li>

                                <hr id="line-copy">

                                <li class="nav-item">
                                    <a class="nav-link" href="#">
                                        <img src="@/assets/copyLogo.png" class="img" alt="">
                                    </a>
                                </li>
                                <hr id="line-copy">

                                <li class="nav-item">
                                    <a class="nav-link" href="#">
                                        <img src="@/assets/questionLogo.png" class="img" alt="">
                                    </a>
                                </li>
                                <hr id="line-copy">

                                <li class="nav-item">
                                    <a class="nav-link" href="#">
                                        <img src="@/assets/ovalRedLogo.png" width="20" class="mb-3 img" alt="">
                                    </a>
                                    
                                </li>
                                <hr id="line-copy">
                                
                                <li class="nav-item dropdown m-2 w-100" >
                                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <img src="@/assets/abelardo.png" class="mr-1" alt="">
                                        <span>Abelardo</span> 
                                    </a>
                                    <div class="dropdown-menu "  aria-labelledby="navbarDropdown">
                                        
                                        <a class="dropdown-item" id="abelardo-acebado" href="#">Abelardo Acebado</a>

                                        <div class="dropdown-divider"></div>
                                        
                                        <a class="dropdown-item" href="#">
                                            <img src="@/assets/iconUser.png" alt="">
                                            Datos Personales
                                        </a>

                                        
                                        <a class="dropdown-item" href="#">
                                            <img src="@/assets/iconUserConfig.png" alt="">
                                            Configuracion
                                        </a>
                                        
                                        <a class="dropdown-item text-danger" href="#">
                                            <img src="@/assets/iconExit.png" alt="">
                                            Salir de mi Cuenta
                                        </a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>    
    </div>
    
</template>

<script>
export default {
    name: 'NavBar',
}
</script>

<style scoped>
    .navbar{
        width: 100%;
        height: 60px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
        background-color: #ffffff;
    }

    #bread-crumbs .badge span{
        color: #8492af;
    }
    
    #bread-crumbs .badge strong{
        color: #415681;
    }

    #line-copy{
        border: none;
        border-left: 1px solid hsla(200, 10%, 50%,100);
        height: 40px;
        width: 1px;
        background-color: #efefef;
        opacity: 20%;
    }

    .nav-item{
        padding-right: 12px;
        margin-top: 12px;
        
    }
    .img{
        padding-left: 12px;
    }
    .dropdown-item{
        color: #555555;
        font-size: 12px;
        font-weight: 500;
        font-style: normal;
        letter-spacing: normal;
        line-height: normal;
        text-align: left;
        margin-top: 22px;
    }

    #abelardo-acebado{
        width: 138px;
        height: 17px;
        color: #273f70;
        font-size: 16px;
        font-weight: 600;
        font-style: normal;
        letter-spacing: normal;
        line-height: normal;
        text-align: left;
        margin-top: 10px;
        margin-bottom: 25px;
    }

    .dropdown-divider{
        width: 134px;
        height: 1px;
        margin-left: 25px;
        opacity: 90%;
    }
</style>