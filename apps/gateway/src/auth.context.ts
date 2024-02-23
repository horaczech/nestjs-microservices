import { UnauthorizedException } from '@nestjs/common';

export const authContext = ({ req }) => {
  if (req.headers?.authorization) {
    // mocked validate auth token
    return {
      user: {
        id: '123',
      },
    };
  }
  throw new UnauthorizedException();
};
