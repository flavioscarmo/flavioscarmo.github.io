    $(document).ready(function() {
        $('#cLosAngeles').hide();
        $('#cMiami').hide();
        $('#cNovaYork').hide();
        $('#cRoma').hide();
        $('#cSydney').hide();
        $('#cLondres').hide();
        $('#cCairo').hide();
        $('#cRioDeJaneiro').hide();
        $('#cShanghai').hide();
        $('#cBuenosAires').hide();
        $('.seta').hide();


        // Los Angeles 
            $('#losAngeles').hover(
              function() { 
                $('#cLosAngeles').show(500); 
                $('#seta-losAngeles').show(500);
            },
              function() { 
                $('#cLosAngeles').hide(); 
                 $('#seta-losAngeles').hide();
            });


            // Miami
            $('#miami').hover(
                function() { 
                  $('#cMiami').show(500); 
                  $('#seta-miami').show(500);
              },
                function() { 
                  $('#cMiami').hide(); 
                   $('#seta-miami').hide();
              });


            //   Nova york
            $('#novaYork').hover(
              function() { 
                $('#cNovaYork').show(500); 
                $('#seta-newYork').show(500);
            },
              function() { 
                $('#cNovaYork').hide(); 
                 $('#seta-newYork').hide();
            });

            // Roma
            $('#roma').hover(
              function() { 
                $('#cRoma').show(500); 
                $('#seta-roma').show(500);
            },
              function() { 
                $('#cRoma').hide(); 
                 $('#seta-roma').hide();
            });

            // Sydney
            $('#sydney').hover(
              function() { 
                $('#cSydney').show(500); 
                $('#seta-sydney').show(500);
            },
              function() { 
                $('#cSydney').hide(); 
                 $('#seta-sydney').hide();
            });

            // Londres
            $('#londres').hover(
              function() { 
                $('#cLondres').show(500); 
                $('#seta-londres').show(500);
            },
              function() { 
                $('#cLondres').hide(); 
                 $('#seta-londres').hide();
            });
          
            // Cairo

            $('#cairo').hover(
              function() { 
                $('#cCairo').show(500); 
                $('#seta-cairo').show(500);
            },
              function() { 
                $('#cCairo').hide(); 
                 $('#seta-cairo').hide();
            });
            
            // Rio De Janeiro
            $('#rioDeJaneiro').hover(
              function() { 
                $('#cRioDeJaneiro').show(500); 
                $('#seta-rio').show(500);
            },
              function() { 
                $('#cRioDeJaneiro').hide(); 
                 $('#seta-rio').hide();
            });
            

            // Shanghai
            $('#shanghai').hover(
              function() { 
                $('#cShanghai').show(500); 
                $('#seta-shanghai').show(500);
            },
              function() { 
                $('#cShanghai').hide(); 
                 $('#seta-shanghai').hide();
            });

            // Buenos Aires
            $('#buenosAires').hover(
              function() { 
                $('#cBuenosAires').show(500); 
                $('#seta-buenos').show(500);
            },
              function() { 
                $('#cBuenosAires').hide(); 
                 $('#seta-buenos').hide();
            });







            
        });
