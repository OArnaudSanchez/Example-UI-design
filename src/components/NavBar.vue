<template>
    <div>
        <div id="content-wrapper" class="d-flex">
            <div id="sidebar-container" class="bg-light border-right">
                <nav class="navbar navbar-light bg-white p-3">
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#opcionMenu" aria-controls="opcionMenu" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                </nav>

                <div class="menu collapse list-group-flush" id="opcionMenu">
                    <a href="" class="list-group-item list-group-item-action bg-light p-3 border-0">
                        <img src="@/assets/usersLogo.png" alt="" class="lead mr-2"> <span>Users</span>
                    </a>
                    <a href="" class="list-group-item list-group-item-action bg-light p-3 border-0">
                        <img src="@/assets/cashLogo.png" alt="" class="lead mr-2"> <span>Money</span>
                    </a>
                    <a href="" class="list-group-item list-group-item-action bg-light p-3 border-0">
                        <img src="@/assets/configurationLogo.png" alt="" class="lead mr-2"> <span>Configuration</span>
                    </a>
                    <a href="" class="list-group-item list-group-item-action bg-light p-3 border-0">
                        <img src="@/assets/statsLogo.png" alt="" class="lead mr-2"> <span>Stats</span>
                    </a>
                </div>
            </div>

            <div id="pageContainer" class="w-100 bg-light-blue">
                <nav class="navbar navbar-expand-lg navbar-light bg-white border-bottom">
                    <div class="container">
                        <span class="badge badge-pill badge-light">
                        <span class="badgeClass">Cartera</span> / 
                        <span class="badgeClass">Clientes</span> / 
                        <strong class="badgeClass">Nombre Cliente</strong>

                        </span>

                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>

                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav ml-auto">
                                <li class="nav-item active">
                                    <a class="nav-link" href="#">
                                        <img src="@/assets/statsLogo.png" alt="">
                                    </a>
                                    
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">
                                        <img src="@/assets/newspaperLogo.png" alt="">
                                    </a>
                                    
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">
                                        <img src="@/assets/searchLogo.png" alt="">
                                    </a>
                                    
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">
                                        <img src="@/assets/copyLogo.png" alt="">
                                    </a>
                                    
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">
                                        <img src="@/assets/questionLogo.png" alt="">
                                    </a>
                                    
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">
                                        <img src="@/assets/ovalRedLogo.png" width="10" class="mb-3" alt="">
                                    </a>
                                    
                                </li>
                                <li class="nav-item dropdown">
                                
                                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <img src="@/assets/abelardo.png" alt="">
                                        <span>Abelardo</span> 
                                    </a>
                                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <a class="dropdown-item" href="#">Mi Perfil</a>
                                        <div class="dropdown-divider"></div>
                                        <a class="dropdown-item" href="#">Cerrar Sesion</a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    </div>
    
</template>

<script>
export default {
    name: 'NavBar'
}
</script>
<style>
    :root{
        --light: #ffffff;
    }
    .bg-light{
        background-color: var(--light) !important;
    }

    #sidebar-container{
        min-height: 100vh; /**Altura del sidebar */
        /* margin-left: 18rem; *Margen izquierdo */
        transition: margin, .25s ease-in-out;
    }
    #sidebar-container .logo{
        padding: .875rem 1.25rem;
        font-size: 1.2rem;
    }
    #sidebar-container .menu{
        width: 12rem; /**Ancho del sidebar */
    }

    .badgeClass{
        color: #8492af;
    }
    
    /* #prueba{
        color: #9b9b9b;
    } */
</style>