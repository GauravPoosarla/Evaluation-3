import React from 'react';
import './Footer.css';
import { Theme } from '../../contexts/Theme';
import makeRequest from '../../utils/makeRequest';
import { PUT_THEME } from '../../constants/apiEndPoints';

function FooterComponent() {
  const { theme, setTheme } = React.useContext(Theme);
  const [isClicked, setIsClicked] = React.useState(true);
  const [themeClicked, setThemeClicked] = React.useState(false);

  if (theme['themes']) {
    const setThemeHandler = async () => {
      setIsClicked(true);
      const reqData = theme.themes.findIndex(item => item.colorHexCode === theme.currTheme);
      const id = theme.themes[reqData].id;
      await makeRequest(PUT_THEME(), { data: { preferredThemeId: id } });
      window.location.reload();
    };

    const handleThemeChange = event => {
      setTheme({ ...theme, currTheme: event.target.id });
      setThemeClicked(true);
      if (event.target.id !== theme.themes.filter(theme1 => theme1.id === theme.preferredThemeId)[0].colorHexCode) {
        setIsClicked(false);
      } else {
        setIsClicked(true);
      }
    };

    return (
      <div className='footer' style={{ backgroundColor: theme.currTheme }}>
        <div className='theme-container'>
          <div className='themes'>
            <div className='themes-header'>THEMES</div>
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
          </div>
          {!isClicked && themeClicked ? (
            <button className={'save-theme'} style={{ color: theme.currTheme }} onClick={setThemeHandler}>
              Save theme
            </button>
          ) : null}
        </div>
      </div>
    );
  }
}

export default FooterComponent;
