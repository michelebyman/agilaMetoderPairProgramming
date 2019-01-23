

$('#wrapper').css({
    width: '100%',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column'
});

$('#leftSection').css({
    width: '50%'
});

$('#rightSection').css({
    width: '50%',
    zIndex: "1",
    backgroundColor: "white"
});

$('.inputs').css({
  backgroundColor: '#fff',
  border: '1px solid #e6ecf0',
  borderRadius: '3px',
  width: '200px',
  height: '45px',
  padding: '10px',
  marginRight: "10px"

});
$('#logIn1').css({
  borderRadius: '35px',
  backgroundColor: '#fff',
  border: '1px solid #1da1f2',
  color: '#1da1f2',
  width: '100px',
  height: '45px',
  fontWeight: 'bold',
  outline: 'none',
}).hover(function(){
  $(this).css("background-color", "aliceBlue");

}, function(){
  $(this).css("background-color", "white");
});




$('.iconSize').css({
  fontSize: "35px",
  marginTop: '20px'
});
