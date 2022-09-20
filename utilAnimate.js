


class AnimateUtil {
  constructor() {
  }


    entra_esquerda(condicao)
    {

        if(condicao == true)
        {
            return 'animate__animated animate__slideInLeft';
        }

    }

    entra_direita(condicao)
    {

        if(condicao == true)
        {
            return 'animate__animated animate__slideOutLeft';
        }

    }

    entra_esquerda_sai_direita(condicao)
    {

        if(condicao == true)
        {
            return 'animate__animated animate__slideInRight';
        }
        if(condicao == false)
        {
            return 'animate__animated animate__slideInLeft';
        }

    }


    entra_direita_sai_esquerda(condicao)
    {

    if(condicao == true)
    {
        return 'animate__animated animate__slideInRight';
    }
    if(condicao == false)
    {
        return 'animate__animated animate__slideOutLeft';
    }

    }


    entra_cima_sai_baixo(condicao)
    {

    if(condicao == true)
    {
        return 'animate__animated animate__backInDown';
    }
    if(condicao == false)
    {
        return 'animate__animated animate__backOutDown';
    }

    }


    entra_baixo_sai_cima(condicao)
    {

    if(condicao == true)
    {
        return 'animate__animated animate__backInUp';
    }
    if(condicao == false)
    {
        return 'animate__animated animate__backOutUp';
    }

    }

  animate__bounce_in_out(condicao)
  {

    if(condicao == true)
    {
        return 'animate__animated animate__bounceIn';
    }
    if(condicao == false)
    {
        return 'animate__animated animate__bounceOut';
    }

  }


  animate__bounceInDown_in_out(condicao)
    {

      if(condicao == true)
      {
          return 'animate__animated animate__bounceInDown';
      }
      if(condicao == false)
      {
          return 'animate__animated animate__bounceOutDown';
      }

    }


    animate__bounceInLeft_in_out(condicao)
    {

      if(condicao == true)
      {
          return 'animate__animated animate__bounceInLeft';
      }
      if(condicao == false)
      {
          return 'animate__animated animate__bounceOutLeft';
      }

    }

    animate__bounceInRight_in_out(condicao)
    {

      if(condicao == true)
      {
          return 'animate__animated animate__bounceInRight';
      }
      if(condicao == false)
      {
          return 'animate__animated animate__bounceOutRight';
      }

    }


    animate__bounceInUp_in_out(condicao)
    {

      if(condicao == true)
      {
          return 'animate__animated animate__bounceInUp';
      }
      if(condicao == false)
      {
          return 'animate__animated animate__bounceOutUp';
      }

    }


    animate__fadeInDownBig_in_out(condicao)
    {

      if(condicao == true)
      {
          return 'animate__animated animate__fadeInDownBig';
      }
      if(condicao == false)
      {
          return 'animate__animated animate__fadeOutDownBig';
      }

    }


   animate__rotateIn_in_out(condicao)
   {

     if(condicao == true)
     {
         return 'animate__animated animate__rotateIn';
     }
     if(condicao == false)
     {
         return 'animate__animated animate__rotateOut';
     }

   }

   animate__zoomIn_in_out(condicao)
   {

     if(condicao == true)
     {
         return 'animate__animated animate__zoomIn';
     }
     if(condicao == false)
     {
         return 'animate__animated animate__zoomOut';
     }

   }


   animate__slideInLeft_in_out(condicao)
    {

    if(condicao == true)
    {
        return 'animate__animated animate__slideInLeft';
    }
    if(condicao == false)
    {
        return 'animate__animated animate__slideOutLeft';
    }

    }

    animate__slideInRight_in_out(condicao)
    {

    if(condicao == true)
    {
        return 'animate__animated animate__slideInRight';
    }
    if(condicao == false)
    {
        return 'animate__animated animate__slideOutRight';
    }

    }



}
