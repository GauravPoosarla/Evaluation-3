/* eslint-disable */
import React from 'react';
import './Footer.css';
import { Theme } from '../../contexts/Theme';
import makeRequest from '../../utils/makeRequest';
import { PUT_THEME } from '../../constants/apiEndPoints';

function FooterComponent() {
  const { theme, setTheme } = React.useContext(Theme);
  if (theme['themes']) {
    const setThemeHandler = async () => {
      const reqData = theme.themes.findIndex(item => item.colorHexCode === theme.currTheme);
      const id = theme.themes[reqData].id;
      await makeRequest(PUT_THEME(), { data: { preferredThemeId: id } });
    };
    const handleThemeChange = event => {
      setTheme({ ...theme, currTheme: event.target.id });
    };
    return (
      <footer style={{ backgroundColor: theme.currTheme }}>
        <div>THEMES</div>
        {theme['themes'].map((item, i) => {
          if (theme.currTheme !== item['colorHexCode']) {
            return (
              <div
                key={i}
                className={'theme-color'}
                style={{ backgroundColor: item['colorHexCode'] }}
                id={item['colorHexCode']}
                onClick={handleThemeChange}></div>
            );
          }
        })}
        <div>
          <button className={'save-theme'} style={{ color: theme.currTheme }} onClick={setThemeHandler}>
            Save theme
          </button>
        </div>
      </footer>
    );
  }
}

export default FooterComponent;
