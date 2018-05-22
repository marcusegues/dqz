// @flow
import semver from 'semver';
import { version } from '../../../package.json';

export const appShouldUpdate = (newVersion: string): boolean =>
  semver.valid(newVersion) && semver.valid(version)
    ? semver.gt(newVersion, version)
    : false;
