import Vue from 'vue'
import VueFbCustomerChat from 'vue-fb-customer-chat'

Vue.use(VueFbCustomerChat, {
  page_id: process.env.FB_PAGE_ID, //  change 'null' to your Facebook Page ID,
  theme_color: '#333333', // theme color in HEX
  locale: 'pt_Br', // default 'en_US'
})
