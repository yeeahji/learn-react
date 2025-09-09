import { Fragment } from 'react';
import Card from '../Card.jsx'
import CourseItem from './CourseItem.jsx'

export default function CourseListCard({ title, items }) {

  const lastIndex = items.length - 1;

  return (
    <Card title={title}>
      <div className="courses">
        {items.map((item, index) => (
          <Fragment key={item.id}>
            <CourseItem {...item} />
            {(index !== lastIndex) && <hr className="divider" />}
          </Fragment>
        ))}
      </div>
    </Card>
  );
}
