<template>
    <footer class="page-footer">
        <hr id="group">
        <div class="bg-white">
            <div class="footer-pages">
                <a href="#">Contactenos </a> |
                <a href="#">Terminos de Uso </a> |
                <a href="#">Privacidad </a> |
                <a href="#">Cookies </a> |
                <a href="#">Seguridad</a>
            </div>
            
            <hr id="line-2">

            <div class="enlaces">
                <a href="https://Instagram.com" target="_blank"><img src="@/assets/instagramLogo.png" alt=""></a>
                <a href="https://Youtube.com" target="_blank"><img src="@/assets/youtubeLogo.png" alt=""></a>
                <a href="https://Facebook.com" target="_blank"><img src="@/assets/facebookLogo.png" alt=""></a>
                <br>
                 <span class="copyright">&copy;2018 CLIENTE. All Rights Reserved</span>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    name: 'Footer'
}
</script>

<style>
    footer{
        width: 100%;
        height: 140px;
        clear: both;
    }
    .footer-pages{
        margin-top: 31px;
        margin-left: 215px;
    }
    .footer-pages a{
        width: 414px;
        height: 17px;
        color: #797979;
        font-family: Montserrat;
        font-size: 12px;
        font-weight: 400;
    }
    .enlaces{
        margin-right: 82px;
    }
    .enlaces a{
        float: right;
        padding-right: 9px;
    }
    .enlaces span{
        opacity: 100%;
        font-size: 12px;
        font-family: Arial;
        letter-spacing: 0px;
        color: #797979;
        margin-left: 214px;
        padding-bottom: 38px;
    }

    #group{
        width: 100%;
        height: 6px;
        background-color: #e5e8ee;
        margin-top: 2px;
    }
    #line-2{
        width: 917px;
        border: 1px;
        height: 1px;
        background-color: #e1e1e1;
        opacity: 100%;
        position: center;
        margin-top: 17px;
        margin-bottom: -17px;
    }
</style>