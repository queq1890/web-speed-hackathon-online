import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import loadable from '@loadable/component';

const Entrance = loadable(() =>
  import('../pages/entrance').then((module) => module.Entrance),
);
const BlogHome = loadable(() =>
  import('../pages/blog_home').then((module) => module.BlogHome),
);
// TODO: Entry をlazy load できない原因を探す
// const Entry = loadable(
//   () => import('../pages/entry').then((module) => module.Entry),
//   <div>loading</div>,
// );
import { Entry } from '../pages/entry';
const NotFound = loadable(
  () => import('../pages/not_found').then((module) => module.NotFound),
  <div>loading</div>,
);

export function Routes() {
  const error = useSelector((state) => state.error);

  if (error.error !== undefined) {
    return <NotFound />;
  }

  return (
    <Switch>
      <Route exact path="/">
        <Entrance />
      </Route>
      <Route exact path="/:blogId">
        <BlogHome />
      </Route>
      <Route exact path="/:blogId/entry/:entryId">
        <Entry />
      </Route>
      <Route path="*">
        <NotFound />
      </Route>
    </Switch>
  );
}
