import React from 'react';
import { Card } from 'antd';

export const Dashboard: React.FC = () => {
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
      <>
        <Card title="Dashboard" style={{ width: '100%', height: '98.5%', marginTop: 16, marginBottom: 30 }} loading={loading}>
          <div>
            <p>lorem impsu</p>
            <p>Teste</p>
          </div>
        </Card>
      </>
    );
};