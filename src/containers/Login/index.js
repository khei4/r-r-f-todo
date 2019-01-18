import { connect } from 'react-redux';
import { loginWithGithub, signOut } from '../../actions';
import Login from '../../components/Login';


const mapDispatchToProps = dispatch => ({
  loginWithGithub: () => dispatch(loginWithGithub()),
  signOut: () => dispatch(signOut())
})
export default connect(
  null,
  mapDispatchToProps
)(Login)
