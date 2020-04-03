import Home from './routes/Home.svelte';
import Dream from './routes/Dream.svelte';
import City from './routes/City.svelte';
import GraphQl from './routes/Graphql.svelte';
import Enkel from './routes/Enkel.svelte';
import Chat from './routes/Chat.svelte';
import Leidenschaft from './routes/Leidenschaft.svelte';
import {
    writable
} from 'svelte/store';
const router = {
    '/': Home,
    '/home': Home,
    '/dream': Dream,
    '/city': City,
    '/graphql': GraphQl,
    '/enkel': Enkel,
    '/chat': Chat,
    '/leidenschaft': Leidenschaft

}
export default router;
export const curRoute = writable('/home');
export const curId = writable(0);