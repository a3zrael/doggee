import './Login.scss';

import { Input } from '../../ui/fields';

export const Login = () => {
  return (
    <div className='login_container'>
      <div className='center_container'>
        <h2>header</h2>
        <div className='form_container'>
          <form action=''>
            <div className='item_form'>
              <Input placeholder='login'/>
              <span>validation</span>
            </div>
            <div className='item_form'>
              <Input placeholder='password'/>
            </div>
            <div className='btn'>
              <button type='submit'>Sign in</button>
            </div>
          </form>
        </div>
        <div></div>
      </div>
    </div>
  );
};
