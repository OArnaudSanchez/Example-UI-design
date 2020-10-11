<template>
    <div class="container">
        <div class="d-none d-sm-none d-md-block">
                <div class="d-flex float-left">
                    <div id="sidebar-cartera" class="bg-light border-right">
                        <div id="main-content">

                            <nav class="navbar navbar-white bg-white">
                                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#sidebar-content" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <img src="@/assets/imgMenu.png" class="navbar-toggler-icon img-sidebar" alt="">
                                </button>
                            </nav>

                            <div class="fixed-right">
                                <div id="sidebar-content">
                                    <div id="icon-nav">
                                        <div class="menu list-group-flush">
                                            <a href="#" class="list-group-item list-group-item-action bg-light p-3 border-0">
                                                <img src="@/assets/usersLogo.png" alt="" class="lead mr-2"> 
                                            </a>
                                            <a href="#" class="list-group-item list-group-item-action bg-light p-3 border-0">
                                                <img src="@/assets/cashLogo.png" alt="" class="lead mr-2"> 
                                            </a>
                                            <a href="#" class="list-group-item list-group-item-action bg-light p-3 border-0">
                                                <img src="@/assets/configurationLogo.png" alt="" class="lead mr-2"> 
                                            </a>

                                            <hr id="rectangle">
                                            <a href="#" class="list-group-item list-group-item-action bg-light p-3 border-0">

                                                <img src="@/assets/statsLogo.png" alt="" class="lead"> 
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </div>
</template>

<script>
export default {
    name: 'Sidebar'
}
</script>

<style scoped>
    .container{
        width: 30%;
        margin-left: -13px;
    }

    #sidebar-cartera{
        width: 96px;
        height: 1392px;
        background-color: #f4f6fa;
        box-shadow: -2px 0 12px rgba(0, 0, 0, 0.2);
    }

    .img-sidebar{
        width: 20px;
        height: 15px;
    }

     #icon-nav{
        width: 52px; 
        display: block;
        margin: auto;
    }

    #rectangle{
        width: 24px;
        height: 1px;
        background-color: #d8d8d8;
        opacity: 56%;
    }
</style>