// from https://www.radix-ui.com/docs/colors/palette-composition/understanding-the-scale
// 1 App background
// 2 Subtle background
// 3 UI element background
// 4 Hovered UI element background
// 5 Active / Selected UI element background
// 6 Subtle borders and separators
// 7 UI element border and focus rings
// 8 Hovered UI element border
// 9 Solid backgrounds
// 10 Hovered solid backgrounds
// 11 Low-contrast text
// 12 High-contrast text
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      error: '#f5d90a',
      primary1: '#07191d',
      primary2: '#061e24',
      primary3: '#072830',
      primary4: '#07303b',
      primary5: '#073844',
      primary6: '#064150',
      primary7: '#045063',
      primary8: '#00647d',
      primary9: '#05a2c2',
      primary10: '#00b1cc',
      primary11: '#00c2d7',
      primary12: '#e1f8fa',
      secondary1: 'hsl(200, 7.0%, 8.8%)',
      secondary2: 'hsl(195, 7.1%, 11.0%)',
      secondary3: 'hsl(197, 6.8%, 13.6%)',
      secondary4: 'hsl(198, 6.6%, 15.8%)',
      secondary5: 'hsl(199, 6.4%, 17.9%)',
      secondary6: 'hsl(201, 6.2%, 20.5%)',
      secondary7: 'hsl(203, 6.0%, 24.3%)',
      secondary8: 'hsl(207, 5.6%, 31.6%)',
      secondary9: 'hsl(206, 6.0%, 43.9%)',
      secondary10: 'hsl(206, 5.2%, 49.5%)',
      secondary11: 'hsl(206, 6.0%, 63.0%)',
      secondary12: 'hsl(210, 6.0%, 93.0%)',
      // const yellow = {
      //   yellow1: '#fdfdf9',
      //   yellow2: '#fffce8',
      //   yellow3: '#fffbd1',
      //   yellow4: '#fff8bb',
      //   yellow5: '#fef2a4',
      //   yellow6: '#f9e68c',
      //   yellow7: '#efd36c',
      //   yellow8: '#ebbc00',
      //   yellow9: '#f5d90a',
      //   yellow10: '#f7ce00',
      //   yellow11: '#946800',
      //   yellow12: '#35290f',
      // }

    }
  },
  plugins: [],
};