<script>
import router, { curRoute, curId } from './router.js';
import OmoNavbar from "./quants/Omo-Navbar.svelte";
import { onMount } from 'svelte';

let currentId;

onMount(() => {
  curRoute.set(window.location.pathname);
  var urlParams = new URLSearchParams(window.location.search);
  if(urlParams.has("id")){
        curId.set(urlParams.get("id"));
        currentId = urlParams.get("id");
 } if (!history.state) {
    window.history.replaceState({path: window.location.pathname}, '',   window.location.href)
  }
})

function handlerBackNavigation(event){
  curRoute.set(event.state.path)
}

const db = {
		cities: [
    {
      id: 0,
      name: "Neue Stadt gründen",
      image: "/images/addcity"
    },
    {
      id: 1,
      name: "Heidelberg",
      image: "https://source.unsplash.com/Yfo3qWK2pjY/250x250"
    },
    {
      id: 2,
      name: "Berlin",
      image: "https://source.unsplash.com/pN684G33h_M/250x250"
    },
     {
      id: 3,
      name: "Memmingen",
      image: "https://source.unsplash.com/pN684G33h_M/250x250"
    }
  ],
  enkels: [
    {
      id: 0,
      name: "Emma",
      image: "https://source.unsplash.com/rDEOVtE7vOs/500x500",
      story:
        "Eines der schönsten Momente meines Lebens habe ich mit Onkel Josef-Dieter gehabt",
      city: 2
    },
    {
      id: 1,
      name: "Jakob",
      image: "https://source.unsplash.com/7YVZYZeITc8/500x500",
      story:
        "Eines der schönsten Momente meines Lebens habe ich mit Onkel Josef-Dieter gehabtf",
      city: 1
    },
    {
      id: 2,
      name: "Volker",
      image: "https://source.unsplash.com/rriAI0nhcbc/500x500",
      story:
        "Eines der schönsten Momente meines Lebens habe ich mit Onkel Josef-Dieter gehabt",
      city: 2
    },
    {
      id: 3,
      name: "Adele",
      image: "https://source.unsplash.com/xe68QiMaDrQ/500x500",
      story:
        "Eines der schönsten Momente meines Lebens habe ich mit Onkel Josef-Dieter gehabt",
      city: 3
    }
  ],
  dreams: [
    {
      id: 1,
      name: "Opa Jakob",
      dream: "ist es als ältester Mensch einen Marathon zu laufen",
      freuden: "spielen",
      color: "bg-ci-2",
      city:1
    },
    {
      id: 2,
      name: "Tante Inge",
      dream: "es noch einmal an die Nordsee zu fahren",
      freuden: "spazieren",
      color: "bg-ci",
      city:2
    },

    {
      id: 3,
      name: "Onkel Otto",
      dream: "ist es ins Stadion des Champions League Finales gehen",
      freuden: "puzzeln",
      color: "bg-ci-2",
      city:3
    }
  ],
  blog:[
    {
      id: 1,
      title: "Alf und Emmy,",
      subtitle: "eine wundersame Begegnung",
      excerpt:
        "Letzte Woche haben sich zum ersten mal zwicshen Alf und Emmy ein Generationen Tandem gebildet. Sie waren gemeinam auf dem Weg zum Schachspielen als es geschah...",
      image: "https://source.unsplash.com/random?sig=123/800x800/",
      cities: [1,2,3]
    },
    {
      id: 2,
      title: "Wie alles began,",
      subtitle: "die ersten Tage von Opa Franz",
      excerpt:
        "Peter, Philipp und Samuel hatten eines Tages den Geistesblitz Opa Franz für Memmingen zu entwickeln. Innerhalb von 24 Stunden bauten sie gemeinsam den ersten...",
      image: "https://source.unsplash.com/random?sig=321/800x800/",
      cities: [1,2,3]
    }
  ]
	};
</script>

<style>
</style>

<svelte:window on:popstate={handlerBackNavigation} />
<div id="pageContent" class="app overflow-y-scroll">
  <div class="sticky top-0" style="z-index:100000">
    <OmoNavbar />
  </div>
  <svelte:component this={router[$curRoute]} {db} {currentId} />
</div>