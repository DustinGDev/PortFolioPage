//For the Links to work

var figElems = document.querySelector('.projects');


  figElems.addEventListener('click', forwardToProject);


function forwardToProject(evt){
  var target = evt.target;
  var elem = target.closest('figure');
  var elemId = elem.id;
  var link;

  switch (elemId){
    case "storyP":
        link = "http://creativus-webart.de/StoryProject/index.php";
        break;
    case "creativusP":
        link = "http://creativus-webart.de";
        break;
    case "tradingCardP":
        link = "https://zero334433.github.io/AnimalTradingCard/card.html";
        break;
    default:
        link = "index.html";
        break;
  }

  var page = window.open(link, '_blank');
  page.focus();
}
