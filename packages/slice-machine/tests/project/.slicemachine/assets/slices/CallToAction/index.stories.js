import MyComponent from './../../../../slices/CallToAction';
import SliceZone from 'vue-slicezone'

  export const DefaultSlice = () => ({
    title: "slices/CallToAction/DefaultSlice",
    components: {
      MyComponent,
      SliceZone
    },
    methods: {
      resolve() {
        return MyComponent
      }
    },
    data() {
      return {
        mock: {"id":"DefaultSlice","name":"Default slice","docURL":"...","version":"sktwi83ykfdt588n","description":"MySlice Template","primary":{"test13":"embrace real-time convergence","test14":"benchmark cross-media users","test15":"reintermediate B2C bandwidth","test1":[{"type":"paragraph","text":"Anim consectetur nulla proident dolore consectetur sunt. Enim pariatur commodo est id.","spans":[]}]},"items":[{"productTitle":[{"type":"paragraph","text":"Nostrud esse aute deserunt. Consectetur id incididunt Lorem exercitation est voluptate id velit irure nostrud magna non excepteur. Eiusmod esse tempor consequat incididunt irure fugiat ullamco proident aliquip est ipsum sint aliquip excepteur ea.","spans":[]}],"productImage":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1587653915936-5623ea0b949a?w=900&h=500&fit=crop"}},{"productTitle":[{"type":"paragraph","text":"Labore magna dolor Lorem. Sit dolor dolor ea non ullamco ad pariatur officia amet culpa magna cupidatat. Nulla deserunt fugiat aliqua officia qui.","spans":[]}],"productImage":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1579931794097-0ad001e51edb?w=900&h=500&fit=crop"}},{"productTitle":[{"type":"paragraph","text":"Id occaecat duis consectetur. Proident quis dolore nisi laborum culpa minim reprehenderit non nostrud aliquip aliquip sunt.","spans":[]}],"productImage":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=900&h=500&fit=crop"}},{"productTitle":[{"type":"paragraph","text":"Dolore dolore adipisicing voluptate labore amet culpa ad.","spans":[]}],"productImage":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1586952518485-11b180e92764?w=900&h=500&fit=crop"}},{"productTitle":[{"type":"paragraph","text":"Anim qui excepteur eu eu quis in voluptate amet dolore amet duis ad. Nulla sunt ad laborum amet proident voluptate consectetur ullamco dolore pariatur mollit fugiat sint velit aliqua.","spans":[]}],"productImage":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=900&h=500&fit=crop"}}],"slice_type":"call_to_action","title":"slices/CallToAction/DefaultSlice"}
      }
    },
    template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
  })

  export const TestId = () => ({
    title: "slices/CallToAction/TestId",
    components: {
      MyComponent,
      SliceZone
    },
    methods: {
      resolve() {
        return MyComponent
      }
    },
    data() {
      return {
        mock: {"id":"TestId","name":"test id","docURL":"...","version":"sktwi83ykfdt588n","description":"MySlice Template","primary":{"title":[{"type":"paragraph","text":"Non duis qui proident ad dolor ex ullamco occaecat sint quis mollit duis.","spans":[]}],"description":[{"type":"paragraph","text":"Sit sit aliquip qui consequat culpa velit ipsum velit ut Lorem.","spans":[]}],"testnumb":529},"items":[{"productTitle":[{"type":"paragraph","text":"Mollit elit veniam quis nisi tempor id esse Lorem ad ullamco et dolor dolore sit aute. Et ad cupidatat enim reprehenderit amet id id adipisicing reprehenderit. Consectetur deserunt deserunt ut nostrud voluptate voluptate dolore.","spans":[]}],"productImage":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1547394765-185e1e68f34e?w=900&h=500&fit=crop"}},{"productTitle":[{"type":"paragraph","text":"Dolor occaecat officia cupidatat sint in culpa sunt dolore excepteur officia labore irure.","spans":[]}],"productImage":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1587653915936-5623ea0b949a?w=900&h=500&fit=crop"}},{"productTitle":[{"type":"paragraph","text":"Elit anim laborum officia officia ad ullamco ipsum.","spans":[]}],"productImage":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=900&h=500&fit=crop"}}],"slice_type":"call_to_action","title":"slices/CallToAction/TestId"}
      }
    },
    template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
  })

  export const Mysuperid = () => ({
    title: "slices/CallToAction/Mysuperid",
    components: {
      MyComponent,
      SliceZone
    },
    methods: {
      resolve() {
        return MyComponent
      }
    },
    data() {
      return {
        mock: {"id":"Mysuperid","name":"My Super Component","docURL":"...","version":"sktwi83ykfdt588n","description":"MySlice Template","primary":{"title":[{"type":"paragraph","text":"Duis et anim minim magna.","spans":[]}],"description":[{"type":"paragraph","text":"Minim occaecat Lorem mollit culpa quis Lorem eiusmod deserunt ad ex enim occaecat. Quis esse ipsum nostrud Lorem ea laboris minim et consequat do nostrud enim. Veniam adipisicing mollit labore ea adipisicing reprehenderit eu culpa sint est in aliqua eu.","spans":[]}],"testnumb":4544},"items":[{"productTitle":[{"type":"paragraph","text":"Sit duis ipsum ad nostrud culpa excepteur cupidatat anim laboris consectetur est tempor excepteur. Deserunt reprehenderit ex quis esse voluptate adipisicing ad adipisicing tempor nulla ad ad.","spans":[]}],"productImage":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1560457079-9a6532ccb118?w=900&h=500&fit=crop"}},{"productTitle":[{"type":"paragraph","text":"Consequat magna Lorem anim nisi.","spans":[]}],"productImage":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1537498425277-c283d32ef9db?w=900&h=500&fit=crop"}},{"productTitle":[{"type":"paragraph","text":"Elit enim sint fugiat Lorem voluptate.","spans":[]}],"productImage":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1593642532973-d31b6557fa68?w=900&h=500&fit=crop"}},{"productTitle":[{"type":"paragraph","text":"Et et veniam ex mollit nisi sit laboris nulla dolore quis. Consequat duis pariatur laborum culpa. Exercitation do adipisicing dolor deserunt ea sit id dolor dolor mollit dolor.","spans":[]}],"productImage":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1587905069134-008460d7a636?w=900&h=500&fit=crop"}}],"slice_type":"call_to_action","title":"slices/CallToAction/Mysuperid"}
      }
    },
    template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
  })

  export const Test123 = () => ({
    title: "slices/CallToAction/Test123",
    components: {
      MyComponent,
      SliceZone
    },
    methods: {
      resolve() {
        return MyComponent
      }
    },
    data() {
      return {
        mock: {"id":"Test123","name":"test123","docURL":"...","version":"sktwi83ykfdt588n","description":"MySlice Template","primary":{"title":[{"type":"paragraph","text":"Consequat ad sunt consequat adipisicing non adipisicing minim aute sit. Sint eiusmod aliqua ex veniam. Officia dolor Lorem quis sunt cillum enim tempor aute enim esse.","spans":[]}],"description":[{"type":"paragraph","text":"Ea tempor veniam labore laboris. Id exercitation aliquip ut cillum adipisicing aliquip labore ea adipisicing sit sit est.","spans":[]}],"testtext":"reinvent innovative applications","testtext2":"engineer turn-key systems","test3":"monetize real-time infomediaries","test5":"strategize open-source functionalities","test6":"disintermediate best-of-breed schemas","test7":"transition dot-com blockchains","test8":"unleash front-end technologies","test9":"innovate compelling e-tailers","test10":[{"type":"paragraph","text":"Adipisicing laborum fugiat esse ut culpa dolore incididunt.","spans":[]}],"test11":"extend next-generation e-services","test12":"redefine dynamic initiatives","test13":"aggregate web-enabled models","test14":"harness revolutionary platforms"},"items":[{"productTitle":[{"type":"paragraph","text":"Duis commodo ad excepteur ut sunt ullamco nostrud cillum deserunt enim aliquip sit culpa. Enim proident sit anim et proident occaecat amet consectetur ea tempor adipisicing adipisicing irure. Tempor consequat elit ut culpa nisi proident in ea ea id tempor sint.","spans":[]}],"productImage":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1587653915936-5623ea0b949a?w=900&h=500&fit=crop"}},{"productTitle":[{"type":"paragraph","text":"Ut excepteur do cupidatat cupidatat. Dolor aute voluptate in qui nostrud commodo aliquip mollit et. Nostrud cupidatat ea ipsum aliqua exercitation cupidatat duis mollit eiusmod esse.","spans":[]}],"productImage":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1504198070170-4ca53bb1c1fa?w=900&h=500&fit=crop"}},{"productTitle":[{"type":"paragraph","text":"Ex consequat sint cillum.","spans":[]}],"productImage":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1587613865763-4b8b0d19e8ab?w=900&h=500&fit=crop"}},{"productTitle":[{"type":"paragraph","text":"Adipisicing sint exercitation occaecat exercitation consectetur qui eiusmod commodo Lorem duis excepteur.","spans":[]}],"productImage":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1493119508027-2b584f234d6c?w=900&h=500&fit=crop"}}],"slice_type":"call_to_action","title":"slices/CallToAction/Test123"}
      }
    },
    template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
  })

  export const Test234 = () => ({
    title: "slices/CallToAction/Test234",
    components: {
      MyComponent,
      SliceZone
    },
    methods: {
      resolve() {
        return MyComponent
      }
    },
    data() {
      return {
        mock: {"id":"Test234","name":"test234","docURL":"...","version":"sktwi83ykfdt588n","description":"MySlice Template","primary":{"title":[{"type":"paragraph","text":"Sint id ut irure consequat. Ex consectetur minim ipsum ad sunt. Ea duis labore ex quis consequat enim consequat sit consectetur aliquip enim est id id sit.","spans":[]}],"description":[{"type":"paragraph","text":"Cillum elit adipisicing velit id. Adipisicing duis occaecat reprehenderit et enim do excepteur duis mollit voluptate deserunt ullamco sit.","spans":[]}],"testtext":"revolutionize robust eyeballs","testtext2":"recontextualize bleeding-edge users","test3":"incubate interactive web-readiness","test5":"synthesize cutting-edge portals","test6":"maximize seamless portals","test7":"empower turn-key technologies","test8":"envisioneer web-enabled infomediaries","test9":"harness B2B solutions","test10":[{"type":"paragraph","text":"Laboris dolore ullamco non labore qui aliquip aliquip quis minim mollit minim laboris fugiat cupidatat cillum.","spans":[]}],"test11":"orchestrate end-to-end portals","test12":"transform ubiquitous interfaces","test13":"scale transparent metrics","test14":"implement global applications"},"items":[{"productTitle":[{"type":"paragraph","text":"Aliqua voluptate sunt irure reprehenderit consectetur.","spans":[]}],"productImage":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1600861194802-a2b11076bc51?w=900&h=500&fit=crop"}},{"productTitle":[{"type":"paragraph","text":"Sint sit sint adipisicing aliqua eiusmod mollit.","spans":[]}],"productImage":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1606248897732-2c5ffe759c04?w=900&h=500&fit=crop"}},{"productTitle":[{"type":"paragraph","text":"Voluptate nostrud dolor exercitation incididunt sint proident voluptate minim officia nulla eiusmod irure. Cupidatat esse ad ipsum mollit cupidatat non do ipsum tempor occaecat minim aliqua. Nostrud fugiat proident dolore pariatur labore enim labore aliquip nisi elit aute.","spans":[]}],"productImage":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1606248897732-2c5ffe759c04?w=900&h=500&fit=crop"}}],"slice_type":"call_to_action","title":"slices/CallToAction/Test234"}
      }
    },
    template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
  })

  export const Test2344 = () => ({
    title: "slices/CallToAction/Test2344",
    components: {
      MyComponent,
      SliceZone
    },
    methods: {
      resolve() {
        return MyComponent
      }
    },
    data() {
      return {
        mock: {"id":"Test2344","name":"test234","docURL":"...","version":"sktwi83ykfdt588n","description":"MySlice Template","primary":{"title":[{"type":"paragraph","text":"Anim laborum culpa voluptate veniam dolore eu est tempor commodo duis. Exercitation dolore cupidatat cillum nostrud nulla amet duis non qui ad veniam ex sunt culpa non. Consequat nulla laboris quis occaecat veniam culpa cillum mollit in adipisicing cupidatat.","spans":[]}],"description":[{"type":"paragraph","text":"Lorem id sint adipisicing nulla voluptate eu sit aliqua ut veniam mollit eu. Labore velit duis in et.","spans":[]}],"testtext":"drive holistic platforms","testtext2":"e-enable bleeding-edge schemas","test3":"transform frictionless niches","test6":"synthesize best-of-breed users","test7":"revolutionize cross-platform solutions","test8":"orchestrate 24/7 schemas","test9":"deliver B2C ROI","test10":[{"type":"paragraph","text":"Esse enim ullamco ea sint eu esse elit ut velit Lorem excepteur dolore cillum anim fugiat.","spans":[]}],"test11":"architect user-centric functionalities","test12":"revolutionize synergistic initiatives","test13":"target user-centric systems","test14":"utilize clicks-and-mortar supply-chains"},"items":[{"productTitle":[{"type":"paragraph","text":"Esse dolore proident exercitation elit minim commodo fugiat exercitation cupidatat dolor ipsum do. Cillum Lorem dolor nisi nulla aliqua eu magna.","spans":[]}],"productImage":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1571126770897-2d612d1f7b89?w=900&h=500&fit=crop"}},{"productTitle":[{"type":"paragraph","text":"Laborum sint culpa ex Lorem aliquip nisi eiusmod aliqua labore. Adipisicing ullamco labore enim occaecat nostrud. In cillum in et.","spans":[]}],"productImage":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1491975474562-1f4e30bc9468?w=900&h=500&fit=crop"}},{"productTitle":[{"type":"paragraph","text":"Occaecat incididunt nostrud tempor. Est qui deserunt pariatur amet nostrud excepteur.","spans":[]}],"productImage":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1587653915936-5623ea0b949a?w=900&h=500&fit=crop"}},{"productTitle":[{"type":"paragraph","text":"Eiusmod velit id voluptate amet nulla reprehenderit id ex consequat cupidatat. Do non commodo do exercitation ex duis enim ullamco reprehenderit commodo. Sit quis ut incididunt.","spans":[]}],"productImage":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1600804931749-2da4ce26c869?w=900&h=500&fit=crop"}}],"slice_type":"call_to_action","title":"slices/CallToAction/Test2344"}
      }
    },
    template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
  })
