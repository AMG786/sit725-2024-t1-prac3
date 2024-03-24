const cardList = [{
    title: 'Lona Misa',
    image: '/images/LonaMisa.jpeg',
    subTitle: 'Create a special occasion so you can head to Flower Drum for novel Cantonese fare that has garnered two hats.',
    description: 'Create a special occasion so you can head to Flower Drum for novel Cantonese fare that has garnered two hats.'
},
{
    title: 'Rocco’s Bologna Discoteca',
    image: '/images/Rocco’sBolognaDiscoteca.jpeg',
    subTitle: 'Create a special occasion so you can head to Flower Drum for novel Cantonese fare that has garnered two hats.',
    description: 'Create a special occasion so you can head to Flower Drum for novel Cantonese fare that has garnered two hats. '
},
{
    title: 'Bomba',
    image: '/images/Bomba.jpg',
    subTitle: 'Create a special occasion so you can head to Flower Drum for novel Cantonese fare that has garnered two hats.',
    description: 'Create a special occasion so you can head to Flower Drum for novel Cantonese fare that has garnered two hats. '
}];

const addCards = (items) => {
    items.forEach(item => {
        let itemToAppend = '<div class="col s4 center-align">'+
                '<div class="card medium"><div class="card-image waves-effect waves-block waves-light"><img class="activator" src="'+item.image+'">'+
                '</div><div class="card-content">'+
                '<span class="card-title activator grey-text text-darken-4">'+item.title+'</span><p><a href="#">'+item.subTitle+'</a></p></div>'+
                '<div class="card-reveal">'+
                '<span class="card-title grey-text text-darken-4">'+item.title+'<i class="material-icons right">close</i></span>'+
                '</div></div></div>';
        $("#card-section").append(itemToAppend)
    });
}


$(document).ready(function(){
    $('.materialboxed').materialbox();
    addCards(cardList);
    $('.modal').modal();
});
  