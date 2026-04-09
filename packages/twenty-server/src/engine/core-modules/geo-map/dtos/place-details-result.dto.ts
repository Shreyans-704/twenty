import { Field, Float, ObjectType } from '@nestjs/graphql';

@ObjectType('Location')
export class LocationDTO {
  @Field(() => Float, { nullable: true })
  lat?: number;

  @Field(() => Float, { nullable: true })
  lng?: number;
}

@ObjectType('PlaceDetailsResult')
export class PlaceDetailsResultDTO {
  @Field({ nullable: true })
  street?: string | null;

  @Field({ nullable: true })
  state?: string | null;

  @Field({ nullable: true })
  postcode?: string | null;

  @Field({ nullable: true })
  city?: string | null;

  @Field({ nullable: true })
  country?: string | null;

  @Field(() => LocationDTO, { nullable: true })
  location?: LocationDTO | null;
}
