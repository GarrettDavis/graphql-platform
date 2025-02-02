using System;
using System.Linq;
using System.Linq.Expressions;
using System.Reflection;

namespace HotChocolate.Types.Filters.Expressions;

[Obsolete("Use HotChocolate.Data.")]
public static class FilterExpressionBuilder
{
    private static readonly MethodInfo _startsWith =
        typeof(string).GetMethods().Single(m =>
            m.Name.Equals(nameof(string.StartsWith))
            && m.GetParameters().Length == 1
            && m.GetParameters().Single().ParameterType == typeof(string));

    private static readonly MethodInfo _endsWith =
        typeof(string).GetMethods().Single(m =>
            m.Name.Equals(nameof(string.EndsWith))
            && m.GetParameters().Length == 1
            && m.GetParameters().Single().ParameterType == typeof(string));

    private static readonly MethodInfo _contains =
        typeof(string).GetMethods().Single(m =>
            m.Name.Equals(nameof(string.Contains))
            && m.GetParameters().Length == 1
            && m.GetParameters().Single().ParameterType == typeof(string));

    private static Expression NullableSafeConstantExpression(
        object? value, Type type)
    {
        return Nullable.GetUnderlyingType(type) is null
            ? Expression.Constant(value)
            : Expression.Convert(Expression.Constant(value), type);
    }

    private static readonly MethodInfo _anyMethod =
        typeof(Enumerable)
            .GetMethods()
            .Single(x => x.Name == nameof(Enumerable.Any) && x.GetParameters().Length == 1);

    private static readonly MethodInfo _anyWithParameter =
        typeof(Enumerable)
            .GetMethods()
            .Single(x => x.Name == nameof(Enumerable.Any) && x.GetParameters().Length == 2);

    private static readonly MethodInfo _allMethod =
        typeof(Enumerable)
            .GetMethods()
            .Single(x => x.Name == nameof(Enumerable.All) && x.GetParameters().Length == 2);

    private static readonly ConstantExpression _null =
        Expression.Constant(null, typeof(object));

    [Obsolete("Use HotChocolate.Data.")]
    public static Expression Not(Expression expression)
        => Expression.Not(expression);

    [Obsolete("Use HotChocolate.Data.")]
    public static Expression Equals(
        Expression property,
        object? value)
        => Expression.Equal(
            property,
            NullableSafeConstantExpression(value, property.Type));

    [Obsolete("Use HotChocolate.Data.")]
    public static Expression NotEquals(
        Expression property,
        object? value)
        => Expression.NotEqual(
            property,
            NullableSafeConstantExpression(value, property.Type));

    [Obsolete("Use HotChocolate.Data.")]
    public static Expression In(
        Expression property,
        Type genericType,
        object? parsedValue)
        => Expression.Call(
            typeof(Enumerable),
            nameof(Enumerable.Contains),
            new[] { genericType },
            Expression.Constant(parsedValue),
            property);

    [Obsolete("Use HotChocolate.Data.")]
    public static Expression GreaterThan(
        Expression property,
        object? value)
        => Expression.GreaterThan(
            property,
            NullableSafeConstantExpression(value, property.Type));

    [Obsolete("Use HotChocolate.Data.")]
    public static Expression GreaterThanOrEqual(
        Expression property,
        object? value)
        => Expression.GreaterThanOrEqual(
            property,
            NullableSafeConstantExpression(value, property.Type));

    [Obsolete("Use HotChocolate.Data.")]
    public static Expression LowerThan(
        Expression property,
        object? value)
        => Expression.LessThan(
            property,
            NullableSafeConstantExpression(value, property.Type));

    [Obsolete("Use HotChocolate.Data.")]
    public static Expression LowerThanOrEqual(
        Expression property,
        object? value)
        => Expression.LessThanOrEqual(
            property,
            NullableSafeConstantExpression(value, property.Type));

    [Obsolete("Use HotChocolate.Data.")]
    public static Expression StartsWith(
        Expression property,
        object? value)
        => Expression.AndAlso(
            Expression.NotEqual(property, Expression.Constant(null)),
            Expression.Call(property, _startsWith, Expression.Constant(value)));

    [Obsolete("Use HotChocolate.Data.")]
    public static Expression EndsWith(
        Expression property,
        object? value)
        => Expression.AndAlso(
            Expression.NotEqual(property, Expression.Constant(null)),
            Expression.Call(property, _endsWith, Expression.Constant(value)));

    [Obsolete("Use HotChocolate.Data.")]
    public static Expression Contains(
        Expression property,
        object? value)
        => Expression.AndAlso(
            Expression.NotEqual(property, Expression.Constant(null)),
            Expression.Call(property, _contains, Expression.Constant(value)));

    [Obsolete("Use HotChocolate.Data.")]
    public static Expression NotNull(Expression expression)
        => Expression.NotEqual(expression, _null);

    [Obsolete("Use HotChocolate.Data.")]
    public static Expression NotNullAndAlso(Expression property, Expression condition)
        => Expression.AndAlso(NotNull(property), condition);

    [Obsolete("Use HotChocolate.Data.")]
    public static Expression Any(
        Type type,
        Expression property,
        Expression body,
        params ParameterExpression[] parameterExpression)
    {
        var lambda = Expression.Lambda(body, parameterExpression);
        return Any(type, property, lambda);
    }

    [Obsolete("Use HotChocolate.Data.")]
    public static Expression Any(
        Type type,
        Expression property,
        LambdaExpression lambda)
        => Expression.Call(
            _anyWithParameter.MakeGenericMethod(type),
            new[] { property, lambda });

    [Obsolete("Use HotChocolate.Data.")]
    public static Expression Any(
        Type type,
        Expression property)
        => Expression.Call(
            _anyMethod.MakeGenericMethod(type),
            new[] { property });

    [Obsolete("Use HotChocolate.Data.")]
    public static Expression All(
        Type type,
        Expression property,
        LambdaExpression lambda)
        => Expression.Call(
            _allMethod.MakeGenericMethod(type),
            new[] { property, lambda });

    [Obsolete("Use HotChocolate.Data.")]
    public static Expression NotContains(
        Expression property,
        object? value)
        => Expression.OrElse(
            Expression.Equal(
                property,
                Expression.Constant(null)),
            Expression.Not(Expression.Call(
                property,
                _contains,
                Expression.Constant(value))));
}
