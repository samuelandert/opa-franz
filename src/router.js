import Home from './routes/Home.svelte';
import Dream from './routes/Dream.svelte';
import City from './routes/City.svelte';
import Events from './routes/Events.svelte';
import Enkels from './routes/Enkels.svelte';
import Chat from './routes/Chat.svelte';
import Leidenschaft from './routes/Leidenschaft.svelte';
import { writable } from 'svelte/store';
const router = {
    '/': Home,
    '/home': Home,
    '/dream': Dream,
    '/cities': City,
    '/events': Events,
    '/enkels': Enkels,
    '/chat': Chat,
    '/leidenschaft': Leidenschaft

}
export default router;
export const curRoute = writable('/home');
export const curId = writable(0);