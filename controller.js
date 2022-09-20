var app = angular.module('myApp', ['ngAnimate']);


    app.run(function($rootScope) {

      $rootScope.animacao = new AnimateUtil();

    });


    app.controller('myCtrl', function($scope, $rootScope)
    {



        $scope.sub_div = [true, false, false, false, false];
        $scope.sub_div_pos_selecionada = 1;
        $scope.avancando=true;






        $scope.btn_avancar = () => {

            $scope.sub_div_pos_selecionada ++;
            let atual_page = $scope.sub_div_pos_selecionada;
            let max_page = $scope.sub_div.length;

            if(atual_page == (max_page+1))
            {
                atual_page = 1;
                $scope.sub_div_pos_selecionada = 1;
            }


            $scope.resetar_amostragem_div();


            $scope.sub_div[atual_page-1] = true;
            $scope.avancando=true;


        };


         $scope.btn_regredir = () => {

            $scope.sub_div_pos_selecionada--;
            let atual_page = $scope.sub_div_pos_selecionada;
            let min_page = 1;
            let max_page = $scope.sub_div.length;

            if(atual_page == (min_page-1))
            {
                atual_page = max_page;
                $scope.sub_div_pos_selecionada = max_page;
            }


            $scope.resetar_amostragem_div();

             $scope.avancando=false;
             $scope.sub_div[atual_page-1] = true;



        };


        $scope.resetar_amostragem_div = () => {

            for(let x=0; x< $scope.sub_div.length; x++)
            {
                 $scope.sub_div[x] =  false;
            }

        };



         $scope.entrando_ou_saindo = (entrando, mostrar) => {


            if(mostrar == false)
                return "";


              return $rootScope.animacao.entra_esquerda_sai_direita(entrando);


        };



    }








);