import axios from 'axios';
export const SET_MENU_ITEMS = "SET_MENU_ITEMS";

export function getMenuItems() {
  return (dispatch) => {
    const response = axios({
      url: 'http://ai-speaker.rhcloud.com/api/Menus',
      method: 'get',
      params: {
        filter: {
          where: {
            lang: "en_EN"
          }
        }
      }
    }).then((response) => {
      dispatch(setMenuItems(response.data))
    })

  }
}

function setMenuItems(menuItems) {
  return {
    type: SET_MENU_ITEMS,
    menuItems
  }
}