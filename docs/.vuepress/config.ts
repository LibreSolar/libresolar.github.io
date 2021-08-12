import { defineUserConfig } from 'vuepress'
import type { DefaultThemeOptions } from 'vuepress'

var path = require('path');

export default defineUserConfig<DefaultThemeOptions>({
  lang: 'en',
  title: 'The Libre Solar Project',
  description: 'Building Blocks for DC Energy Systems',
  head: [
    ['link', { rel: "apple-touch-icon", sizes: "180x180", href: "/favicons/apple-touch-icon.png"}],
    ['link', { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicons/favicon-32x32.png"}],
    ['link', { rel: "icon", type: "image/png", sizes: "16x16", href: "/favicons/favicon-16x16.png"}],
    ['link', { rel: "manifest", href: "/favicons/site.webmanifest"}],
    ['link', { rel: "mask-icon", href: "/favicons/safari-pinned-tab.svg", color: "#5bbad5"}],
    ['link', { rel: "shortcut icon", href: "/favicons/favicon.ico"}],
    ['meta', { name: "msapplication-TileColor", content: "#2b5797"}],
    ['meta', { name: "msapplication-config", content: "/favicons/browserconfig.xml"}],
    ['meta', { name: "theme-color", content: "#ffffff"}],
  ],
  theme: path.resolve(__dirname, './theme'),
  themeConfig: {
    logo: '/images/libresolar-logo-white-header.png',
    navbar: [
      { text: 'Hardware', link: '/hardware/' },
      { text: 'Software', link: '/software/' },
      { text: 'Learn', link: 'https://learn.libre.solar' },
      /*{
        text: 'Learn',
        children: [
          { text: 'System Layout', link: '/learn/system.md' },
          { text: 'Development', link: '/learn/development.md' },
          { text: 'Production', link: '/learn/production.md' },
        ],
      },*/
      { text: 'Forum', link: 'https://talk.libre.solar', target:'_self' },
      { text: 'About', link: '/about/' },
    ],
    sidebar: {
      '/hardware/': [
        {
          text: 'Charge Controllers',
          isGroup: true,
          children: [
            { text: 'Overview', link: '/hardware/cc-overview.md' },
            { text: 'MPPT 2420 HC', link: '/hardware/mppt-2420-hc.md' },
            { text: 'MPPT 1210 HUS', link: '/hardware/mppt-1210-hus.md' },
            { text: 'PWM 2420 LUS', link: '/hardware/pwm-2420-lus.md' },
            { text: 'Inactive Designs', link: '/hardware/cc-inactive.md' },
          ],
        },
        {
          text: 'Battery Management',
          isGroup: true,
          children: [
            { text: 'Overview', link: '/hardware/bms-overview.md' },
            { text: 'BMS 8S50 IC', link: '/hardware/bms-8s50-ic.md' },
            { text: 'BMS 15S50 SC', link: '/hardware/bms-15s80-sc.md' },
            { text: 'Inactive Designs', link: '/hardware/bms-inactive.md' },
          ],
        },
        {
          text: 'Other Devices',
          isGroup: true,
          children: [
            { text: 'RPi CAN gateway', link: '/hardware/rpi-can.md' },
            { text: 'UEXT modules', link: '/hardware/uext-modules.md' },
          ],
        },
        {
          text: 'Interfaces',
          isGroup: true,
          children: [
            { text: 'LS.one', link: '/hardware/ls-one.md' },
            { text: 'LS.bus', link: '/hardware/ls-bus.md' },
          ],
        },
      ],
      '/software/': [
        {
          text: 'Firmware',
          isGroup: true,
          children: [
            { text: 'Charge Controller', link: '/software/charge-controller.md' },
            { text: 'Battery Management', link: '/software/bms.md' },
            { text: 'ESP32 Edge', link: '/software/esp32-edge.md' },
          ],
        },
        /*{
          text: 'Cloud Integration',
          isGroup: true,
          children: [
            { text: 'Grafana', link: '/software/grafana.md' },
            { text: 'EmonCMS', link: '/software/emoncms.md' },
          ],
        },*/
        {
          text: 'Communication',
          isGroup: true,
          children: [
            { text: 'ThingSet Protocol', link: '/software/thingset.md' },
          ],
        },
      ],
      '/about/': [
        {
          text: 'Libre Solar',
          isGroup: true,
          children: [
            { text: 'Mission', link: '/about/mission.md' },
            { text: 'Support', link: '/about/support.md' },
            { text: 'Contact', link: '/about/contact.md' },
          ],
        },
        {
          text: 'Partners & Projects',
          isGroup: true,
          children: [
            { text: 'Open HW Projects', link: '/about/open-hw-projects.md' },
            //{ text: 'Cloud Solar', link: '/about/cloud-solar.md' },
            //{ text: 'Evolving Grids', link: '/about/evolving-grids.md' },
          ],
        },
      ],
    },
    contributors: false,
    docsRepo: 'LibreSolar/libresolar.github.io',
    docsDir: 'docs',
    docsBranch: 'main',
    editLinks: true,
    lastUpdated: true,
  }
})
