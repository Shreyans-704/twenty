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
  @Field(() => String, { nullable: true })
  street!: string | null;

  @Field(() => String, { nullable: true })
  city!: string | null;

  @Field(() => String, { nullable: true })
  state!: string | null;

  @Field(() => String, { nullable: true })
  country!: string | null;

  @Field(() => String, { nullable: true })
  postcode!: string | null;

  @Field(() => LocationDTO, { nullable: true })
  location!: LocationDTO | null;
}
