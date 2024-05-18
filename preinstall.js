import isCI from 'is-ci';
import huskyInstall from 'husky';

if (!isCI) {
  huskyInstall();
}
