import { IBaseTheme } from '../Base';

export class NightTheme implements IBaseTheme {
  name = 'NightTheme';
  
  fontFamily = `'Dosis', sans-serif`;
  backgroundColor = '#111212';
  primaryColor = '#790103';
  secondaryColor = '#c3cfcf';
  complementaryColor = '#1c1e1f';
  complementaryColor2 = '#3e4547';
  errorColor = '#eb5c54';
  successColor = '#29bd9b';
  bodyTextColor = '#303738';
  textColor = '#ddf2ef';
}
