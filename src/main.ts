import './index.css'
import Alpine from 'alpinejs'

window.Alpine = Alpine

Alpine.store('shop', {
  name: 'Alpine-Shop',
  products: ['Swiss Alp Chocolate', 'Car Alpine A110'],
})

Alpine.start()
